function RecipeItem({recipe}) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} />
    </div>
  );
}

export default RecipeItem