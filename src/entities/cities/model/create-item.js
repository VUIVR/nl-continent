export class CreateItemCiry {
  /**название населённого пункта  */
  city;
  /* строка с названием страны, области и населённого пункта */
  label;
  /** ID населенного пункта */
  id;

  constructor(data) {
    this.city = data.city;
    this.label = data.label;
    this.id = data.id;
  }
}
