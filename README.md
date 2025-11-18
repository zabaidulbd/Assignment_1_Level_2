Blog Task:
.................


Question: 2: What is the use of the keyof keyword in TypeScript? Provide an example.


Answer (In Bangla): 

TypeScript এর keyof হলো একটি অপারেটর যেটা অবজেক্ট টাইপের সকল প্রপাটির নাম নিয়ে একটি union টাইপ বানায়। এর মাধ্যমে আমরা জানতে পারি যে একটা অবজেক্টে কতগুলো keys আছে.
অথাৎ আমরা যখন বড় কোন অবজেক্ট প্রপ্রাটি নিয়ে কাজ করি, keyof এর মাধ্যমে আমরা বলে দিতে পারি যে কোন কোন প্রপাটিগুলো ব্যবহার করা যাবে। 


উদাহরন। 

যদি আমাদের কাছে একটা User টাইপ থাকে। 

যেমন: type TUser = {

  name: string;
  age: number;
  isAdmin: boolean;

}

এখন যদি আমরা লিখি..

type UserKeys = keyof TUser;

তাহলে UserKeys এর টাইপ হবে। 

"name" | "age" | "isAdmin"



4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
....................................

Answer (In Bangla):

Enum হলো TypeScript এর একটি ফিচার যা আমাদেরকে কিছু ফিকসড ভেলু গ্রুপ আকারে রিপ্রেজেন্স করতে সাহায্য করে।  


উদাহরন:

ক) Numeric এর ক্ষেত্রে: 

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

এখানে স্টেটাসকোড গুলো ফিক্সড ভেলু তাই আমরা এগুলোকে এনাম আকারে লিখতে পারি। 

খ) String এর ক্ষেত্রে:

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"

} 
আমাদের স্টিং এর ফিক্সট ভেলু গুলোকে আমরা রিডেবল স্টিং দিয়ে ডিফাইন করেছি। যাতে কোড বুঝতে আরও সহজ হয়। 

