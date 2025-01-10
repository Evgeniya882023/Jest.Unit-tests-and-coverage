const sorting = require("../../app");
//непрактичная форма написания тестов , переменные лучше выносить отдельно.см.ниже
//describe("Books names test suit", () => {
  //it("Books names should be sorted in ascending order", () => {
    //expect(
     // sorting.sortByName([
        //"Гарри Поттер",
       // "Властелин Колец",
        //"Волшебник изумрудного города",
      //])
    //).toEqual([
      //"Властелин Колец",
      //"Волшебник изумрудного города",
      //"Гарри Поттер",
    //]);
  //});
//});

describe("Books names test suit", () => {
  // Набор тестовых сьютов
  it("Books names should be sorted in ascending order", () => {
    // Название теста
    const input = [
      //Входные данные
      "Гарри Поттер",
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      //Ожидаемый результат
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input); // Фактический результат
    expect(output).toEqual(expected); // Сравнение результатов
  });
  //тест , который падает 
  // it("Books names not sorted", () => {
    // Название теста
    //const input = [
      //Входные данные
      //"Властелин Колец",
      //"Гарри Поттер",
      //"Волшебник изумрудного города"
    //];
    //const expected = [
      //Ожидаемый результат
     //"Властелин Колец",
      //"Гарри Поттер",
      //"Волшебник изумрудного города"
    //];
    //const output = sorting.sortByName(input); // Фактический результат
    //expect(output).toEqual(expected); // Сравнение результатов
  //});

  describe('Empty array of books test suit', () => {
    it('Empty array should return', () => {
      const input = [];
      const output = sorting.sortByName(input);
      const expected = [];
  
      expect(output).toEqual(expected);
    });
  });
  
  describe('Without parameters test suit', () => {
    it('Without parameters throws exeption', () => {
      expect(() => sorting.sortByName()).toThrow(TypeError);
    });
  });
});