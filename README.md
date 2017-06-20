# GraphyQl Express MongoDB Server
The most common approach across the web in the last few years has been the REST architectural style. However, this approach brings some limitations for high data demand applications. In a RESTful system, we need to make multiple HTTP requests to grab all the data we want, which has a significant performance impact. What if there was a way to request multiple resources in a single HTTP request?

Introducing GraphQL, a query language which unifies the communication between client and server side. It allows the client side to describe exactly the data it needs, in a single request.

## Testing width GraphiQL Tool

http://localhost:8080/graphql

## Querys

**List All Posts**
```
graphiQL: {blogPosts{_id,title,description}}
url: ?query={blogPosts{_id,title,description}}
```

**List Single Post**
```
graphiQL: {blogPost(id: "58e6c2b0a23739184b0b0fcf"){_id,title,description}}
url: ?query={blogPost(id: "58e6c2b0a23739184b0b0fcf"){_id,title,description}}

```

**List Post and comments**
```
graphiQL: {blogPost(id: "58e6c2b0a23739184b0b0fcf"){_id,title,description} comments (postId: "58e6c2b0a23739184b0b0fcf") { text }}
url: ?query={blogPost(id: "58e6c2b0a23739184b0b0fcf"){_id,title,description} comments (postId: "58e6c2b0a23739184b0b0fcf") { text }}
```


Mutations:


##Mutations

**Add Post**

GraphiQL: 
mutation{addBlogPost(data: {title: "first post", description: "first post"})}


```
{
	"query": "mutation($data: BlogPostInput!) { addBlogPost(data: $data) }",
	"variables": {
		"data": {
			"title":"second post",
			"description": "description first post"
		}
	}
}

```

**Add Comment to a Post**

```
{
	"query": "mutation($data: CommentInput!) { addComment(data: $data) }",
	"variables": {
		"data": {
			"postId": "58e6c2b0a23739184b0b0fcf",
			"text":"comment for post 1",
		}
	}
}

```


## Links
https://www.sitepoint.com/creating-graphql-server-nodejs-mongodb/
