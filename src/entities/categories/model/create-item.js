export class CreateItemCategory {
  /**название категории */
  name;
  /* цвет текста категории */
  text__color;
  /** изображение  */
  image;
  /** уникальный тег */
  slug;

  constructor(data) {
    this.name = data.name;
    this.text__color = data.text__color;
    this.image = data.image;
    this.slug = data.slug;
  }
}
