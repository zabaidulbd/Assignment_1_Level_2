const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type TItem = {
  title: string;
  rating: number;
};

function filterByRating(items: TItem[]): TItem[] {
  return items.filter((item) => item.rating >= 4);
}

type TUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: TUser[]): TUser[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  function alreadyInArray(
    array: (string | number)[],
    value: string | number
  ): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (value !== undefined && !alreadyInArray(result, value)) {
      result[result.length] = value;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (value !== undefined && !alreadyInArray(result, value)) {
      result[result.length] = value;
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const totalPrice = product.price * product.quantity;
    const priceWithDiscount = product.discount
      ? totalPrice - (totalPrice * product.discount) / 100
      : totalPrice;

    return total + priceWithDiscount;
  }, 0);
}
