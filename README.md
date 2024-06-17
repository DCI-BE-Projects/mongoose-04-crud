## Last week:-

-- MVC Project structure in Backend(routes)
-- Schema (required:true)
-- Subdocuments (ref, populate)

## Today

-- try and catch method
-- CRUD method
-- Soft delete

## Handling errors

-- try ... catch

## How do they work

-- we create a block of code

```python

try{
const newData = await Model.create({})
}catch(error){
    console.log("The error is:",error)
}
```

## Global handling

app.use(req,res,next)=>{
console.log(error)
res.status(500).json("error":"Internal error")
}

## CRUD method:-

-- GET (get all the data)
-- POST (create new data)
-- PUT ()
-- PATCH
-- DELETE

```python
 const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

```

## PUT method:-

{

    title: String, // String is shorthand for {type: String}

author: "Smith",
body: String,
comments: [{ body: String, date: Date }],
date: { type: Date, default: Date.now },
hidden: Boolean,
meta: {
votes: Number,
favs: Number
}

}

## PATCH method:-

{
comment:[{}]
}

## Difference between PUT and PATCH method:-

-- Both PUT and PATCH requests are used for this purpose, but they have different functions. This guide explains the key differences between these two methods so that you can choose the approach that best suits your needs.

-- Unlike the PUT request, PATCH performs a partial update, i.e. for fields that need to be updated by the client, only that field is updated without changing the other field