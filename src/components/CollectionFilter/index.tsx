import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  CandyShop,
  fetchAllCollection,
  fetchCollectionByShopAddress,
} from "@liqnft/candy-shop-sdk";
import { ListBase, NftCollection } from "@liqnft/candy-shop-types";
import { Processing } from "../Processing";
import { CollectionFilter as CollectionFilterType } from "../../model";
import { Search } from "../Search";
import { removeDuplicate } from "../../utils/array";
import { LoadStatus } from "../../constant";
import "../../style/order-filter.less";
import "./style.css";
import { NavLink } from "react-router-dom";

interface CollectionFilterProps {
  onChange: (
    item: NftCollection | CollectionFilterType | undefined,
    type: "auto" | "manual"
  ) => any;
  selected?: NftCollection;
  candyShop: CandyShop;
  filters?: CollectionFilterType[] | boolean;
  selectedManual?: CollectionFilterType;
  shopId?: string;
  // showAllFilters: boolean;
  search?: boolean;
}

const Logger = "CandyShopUI/Collection";
const LIMIT = 10;

export const CollectionFilter: React.FC<CollectionFilterProps> = ({
  onChange,
  selected,
  candyShop,
  filters,
  selectedManual,
  shopId,
  // showAllFilters,
  search,
}) => {
  const [options, setOptions] = useState<NftCollection[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<LoadStatus>(LoadStatus.ToLoad);
  const [haveNext, setHaveNext] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>();
  const [previousShopId, setPreviousShopId] = useState<string | undefined>(
    shopId
  );

  if (shopId !== previousShopId) {
    setPreviousShopId(shopId);
    setOffset(0);
  }

  const onSearch = useCallback((keyword: string) => {
    setKeyword(keyword);
    setOffset(0);
  }, []);

  const getFetchCollectionAPI = useCallback(
    (startIndex: number) => {
      const queryDto = {
        offset: startIndex,
        limit: LIMIT,
        shopId: shopId || candyShop.candyShopAddress.toString(),
        name: keyword,
      };
      if (shopId) return fetchCollectionByShopAddress(queryDto);
      return fetchAllCollection(queryDto);
    },
    [candyShop, keyword, shopId]
  );

  const fetchOption = useCallback(
    (startIndex: number) => {
      if (!candyShop) return;
      setLoading(LoadStatus.Loading);
      getFetchCollectionAPI(startIndex)
        .then((res: ListBase<NftCollection>) => {
          if (!res.success) {
            setHaveNext(false);
            setOptions([]);
            return;
          }
          const { result, offset, totalCount, count } = res;
          setHaveNext(offset + count < totalCount);
          setOffset((startIndex) => startIndex + LIMIT);
          setOptions((list) => {
            if (offset === 0) return result || [];
            return removeDuplicate<NftCollection>(list, result, "id");
          });
        })
        .catch((err: Error) =>
          console.log(`${Logger} fetchAllCollection error=`, err)
        )
        .finally(() => setLoading(LoadStatus.Loaded));
    },
    [candyShop, getFetchCollectionAPI]
  );

  useEffect(() => {
    if (offset !== 0 || Array.isArray(filters)) return;
    fetchOption(0);
  }, [fetchOption, filters, offset]);

  // Manual filter
  const filteredList: CollectionFilterType[] = useMemo(() => {
    if (!Array.isArray(filters)) return [];
    if (!keyword) return filters;

    const keywordList = keyword.split(" ");
    return filters.filter((item) => {
      const name = (item.name as string).toLowerCase();
      return keywordList.some((word) => name.includes(word));
    });
  }, [filters, keyword]);

  // Manual filter
  if (Array.isArray(filters)) {
    return (
      <>
        {/* <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav">
                    <li className="nav-item ms-3">
                        <a href="pipeline.html" className="nav-link">
                            <p className="nav-item-pipehome px-4 pt-4">
                                stakeholders
                            </p>
                        </a>
                    </li>
                </ul>
      </div> */}

        <div className="sort-container text-uppercase">
          {filteredList.map((filter) => {
            return (
              <>
                <input type="radio" name={filter.name} id={filter.collectionId} checked={selectedManual?.collectionId === filter.collectionId}
                  key={filter.name}
                  className="btn-check ms-3"
                  onClick={onChange(filter, "manual")}
                />
                <label className={
                  selectedManual?.collectionId === filter.collectionId
                    ? "selected sort px-4 py-3"
                    : "sort px-4 py-3"
                } htmlFor={filter.collectionId}>
                  {filter.name}   {filter.qubeClaims}
                </label>

              </>
            );
          })}
        </div>

        <div className="dropdown sort-container-mobile w-100">
          <button
            className="btn btn-secondary dropdown-toggle w-100 d-block"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ fontSize: "20px", fontWeight: "bold", textTransform: "uppercase", width: "100%", whiteSpace: "break-spaces",}}
          >
            {selectedManual ? `${selectedManual.name} ${selectedManual.qubeClaims}` : "Select an option"}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ zIndex: "1005", }}>
            {filteredList.map((filter) => (
              <div key={filter.collectionId} className="dropdown-item w-100">
                <input
                  type="radio"
                  name="filterOption"
                  id={filter.collectionId}
                  checked={selectedManual?.collectionId === filter.collectionId}
                  className="btn-check ms-3 w-100"
                  style={{ width: "100%",  }}
                  onClick={() => onChange(filter, "manual")}
                />
                <label
                  htmlFor={filter.collectionId}
                  className={
                    selectedManual?.collectionId === filter.collectionId
                      ? "selected sort px-4 py-3 nav-link active w-100"
                      : "sort px-4 py-3"
                  }
                  style={{ width: "100%", whiteSpace: "break-spaces", }}
                >
                  {filter.name} {filter.qubeClaims}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* {search && <Search onSearch={onSearch} placeholder="Search collections" />} */}
        {/* {selectedManual ? (
            <div className="candy-filter-selected-name">
              {selectedManual.name}
              <span className="close-icon" onClick={onChange(undefined, 'manual')} />
            </div>
          ) : null} */}
        {/* {!showAllFilters && (
            <li key="All" onClick={onChange(undefined, 'manual')} className={selectedManual ? '' : 'selected'}>
              All
            </li>
          )} */}

      </>
    );
  }

  const disableLoadMore = !haveNext || loading === LoadStatus.Loading;

  return (
    <div className="candy-collection-filter">
      <div className="candy-filter-subtitle">Collections</div>
      {search && (
        <Search onSearch={onSearch} placeholder="Search collections" />
      )}
      {selected ? (
        <div className="candy-filter-selected-name">
          {selected.name}
          <span className="close-icon" onClick={onChange(undefined, "auto")} />
        </div>
      ) : null}
      <ul className="candy-filter-options">
        {options.map((item) => (
          <li
            key={item.id}
            onClick={onChange(item, "auto")}
            className={selected === item ? "selected" : ""}
          >
            {item.name}
          </li>
        ))}
        {loading === LoadStatus.Loading && <Processing />}
        <button
          disabled={disableLoadMore}
          className={`candy-filter-load ${disableLoadMore ? "candy-filter-load-disable" : ""
            }`}
          onClick={() => fetchOption(offset)}
        >
          + Load more
        </button>
      </ul>
    </div>
  );
};
