import React from "react";
import { CategoryCard } from "../../../components/CategoryCard";
import "./index.css"
export const PostCategories = ({ onCategoryClick }) => {
  const categories =[
    {
      name: 'arte-cultura',
      title: 'Arte y Cultura',
      image: 'https://estaticos.esmadrid.com/cdn/farfuture/10xy9kjphbELczUIwaUNXLN2ODhvzY97upXlH0Vc2Xw/mtime:1646729415/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/MUSEOPRADO_005_alta.jpg?itok=-Vbneubb'
    },
    {
      name: 'gastronomia',
      title: 'Gastronomía',
      image: 'https://www.estaentumundo.com/wp-content/imagenes/2018/03/tapas-madrid-750x500.jpg'
    },
    {
      name: 'deporte',
      title: 'Deporte',
      image: 'https://universidadeuropea.com/resources/media/images/turismo-deportivo-medio-maraton-07.2e16d0ba.fill-420x237.jpg'
    },
    {
      name: 'naturaleza-aire-libre',
      title: 'Naturaleza y Aire Libre',
      image: 'https://www.spain.info/export/sites/segtur/.content/imagenes/top10/madrid/madrid-aire-libre-s681043036.jpg'
    }
  ]
  

  return (
    <div className="post-categories">
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          onClick={onCategoryClick}
        />
      ))}
    </div>
  );
};
