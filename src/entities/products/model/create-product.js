export class CreateItemProduct {
  /** изображение */
  image;
  /** название категории */
  categoryName;
  /** название продукта */
  presentName;
  /** текст под названием продукта */
  commentName;
  /** цена (всегда в рублях) */
  price;
  /** если поле false, тогда товара нет в наличии */
  allowed;
  /** если поле false, тогда товара нет в наличии */
  available;
  /** список категорий и подкатегорий, в которые входит продукт */
  // tags;

  constructor(data) {
    this.image = data['main_image_thumb_300'];
    this.categoryName = data.category.name;
    this.presentName = data.present_name;
    this.commentName = data.comment_name;
    this.price = data.price;
    this.allowed = data.allowed;
    this.available = data.available;
    // this.tags = data.tags;
  }
}
