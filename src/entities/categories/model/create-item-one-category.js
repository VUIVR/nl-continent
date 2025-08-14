export class CreateItemOneCategory {
  /**название категории */
  name;
  /* цвет текста категории */
  text__color;
  /** изображение  */
  image;
  /** уникальный тег */
  slug;
  /** список подкатегорий */
  children;

  constructor(data) {
    this.name = data.name;
    this.text__color = data.text__color;
    this.image = data.image;
    this.slug = data.slug;
    this.childrens = data.children.map((i) => {
      return {
        name: i.name,
        slug: i.slug,
      };
    });
  }
}
