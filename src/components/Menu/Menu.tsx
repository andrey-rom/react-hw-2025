import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";
import MenuCard from "../MenuCard/MenuCard";
import useFetch from "../../hooks/useFetch";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Menu.css";
import type { MenuItem } from "../../types";

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";
const DEFAULT_LIMIT = 6;

const Menu = () => {
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);
  const [category, setCategory] = useState<string>("dessert");
  const dispatch = useAppDispatch();
  const { t } = useLanguage();

  const { data, error, loading } = useFetch<MenuItem[]>(
    API_URL + (category ? `?category=${category}` : "")
  );

  const handleLoadMore = (): void => {
    setLimit(limit + DEFAULT_LIMIT);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLButtonElement>): void => {
    setCategory(e.currentTarget.name);
  };

  const handleAddToCart = (item: MenuItem, count: number): void => {
    dispatch(addToCart({ item, count }));
  };

  const isAddMoreButtonVisible = (data?.length ?? 0) > limit;

  if (loading) {
    return <div className="menu">{t("menu.loading")}</div>;
  }

  if (error) {
    return <div className="menu">{t("menu.error")} {error.message}</div>;
  }

  return (
    <div className="menu">
      <span className="menu-title">{t("menu.title")}</span>
      <span className="menu-description">
        {t("menu.description")}
      </span>
      <div className="menu-buttons">
        <button
          className={`menu-button ${
            category === "dessert" ? "menu-button-active" : ""
          }`}
          onClick={handleCategoryChange}
          name="dessert"
        >
          {t("menu.dessert")}
        </button>
        <button
          className={`menu-button ${
            category === "dinner" ? "menu-button-active" : ""
          }`}
          onClick={handleCategoryChange}
          name="dinner"
        >
          {t("menu.dinner")}
        </button>
        <button
          className={`menu-button ${
            category === "breakfast" ? "menu-button-active" : ""
          }`}
          onClick={handleCategoryChange}
          name="breakfast"
        >
          {t("menu.breakfast")}
        </button>
      </div>
      <div className="menu-dishes">
        {data?.slice(0, limit).map((dish) => (
          <MenuCard key={dish.id} dish={dish} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {isAddMoreButtonVisible && (
        <button className="menu-button" onClick={handleLoadMore}>
          {t("menu.loadMore")}
        </button>
      )}
    </div>
  );
};

export default Menu;

