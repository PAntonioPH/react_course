import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    setCategories([newCategory, ...categories,])
    // setCategories((category) => [...category, "Hola mundo"])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) =>
        (
          <GifGrid
            key={category}
            category={category}
          />
        )
      )}
    </>
  )
}