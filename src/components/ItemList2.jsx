function ItemList2() {
  let itemName = "Go To College";
  let itemDate = "4/10/2023";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{itemName}</div>
        <div class="col-4">{itemDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemList2;
