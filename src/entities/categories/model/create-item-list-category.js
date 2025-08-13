export class CreateItemListCategory {
  /**название категории */
  name;
  /* цвет текста категории */
  textColor;
  /** изображение  */
  image;
  /** уникальный тег */
  slug;

  constructor(data) {
    this.name = data.name;
    this.textColor = data.text_color;
    this.image = data.image;
    this.slug = data.slug;
  }
}
