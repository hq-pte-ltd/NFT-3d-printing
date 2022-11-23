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
  const [sortName, setSortName] = useState("Highlighted Projects");
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

  const handleClick = async (filter:CollectionFilterType)=>{
   
    onChange(filter, "manual");
   
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
        <div className="dropdown d-flex justify-content-center" id="navmenu">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Sort by: {sortName}
  </button>
        <ul className="dropdown-menu text-uppercase" aria-labelledby="dropdownMenuButton1">
        {filteredList.map((filter) => {
          return (
            <>
              <li
                key={filter.name}
                className={
                  selectedManual?.collectionId === filter.collectionId
                    ? "dropdown-item ms-3 selected"
                    : "dropdown-item ms-3"
                  }
                  onClick={()=>handleClick(filter).then(()=> setSortName(filter.name))}
              >
              <p className="dropdown-item px-4 pt-4">
              {filter.name}   {filter.qubeClaims}
              </p>
              </li>
            </>
          );
        })}
        </ul>
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
        </div>
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
          className={`candy-filter-load ${
            disableLoadMore ? "candy-filter-load-disable" : ""
          }`}
          onClick={() => fetchOption(offset)}
        >
          + Load more
        </button>
      </ul>
    </div>
  );
};
