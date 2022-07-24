# Svelte AJAX

Svelte AJAX is a set of drop-in replacement components to help you handle REST requests with only a few lines of code.


## Installation
```
npm install --save svelte-ajax
```

## Usage

### Form

```Form``` is a replacement for HTML ```<form>``` tag to handle REST calls

```
<script>
    import {Form} from 'ajax-svelte';

    let response;
    let error;
</script>
<Form action="http://example.com/api/posts" bind:data={response} {error}>
    Title: <input type="text" name="title"><br/>
    Description: <textarea name="description"/><br/>
    <input type="submit" value="Submit">
</Form>
```

**Attributes**

|```action```  |  Required  | REST api endpoint | |
|```medthod``` |  Optional  | HTTP verb. Allowed: POST, PUT, PATCH, DELETE | Default: POST  |
|```data```    |  Optional  | Bindable attribute which returns data on successful response with status code 200 | |
|```error```   |  Optional  | Returns error when status code other than 200 | |

**Events**

on:response     Returns event with data on REST response


## Setup

If you want to setup headers and endpoint globally, you can use ```SetupAjax``` in ```App.svelte``` as follows

App.svelte
```
<script>
import {SetupAjax} from 'svelte-ajax';

SetupAjax({
    endpoint: 'https://example.com/api/',
    headers: {
        apikey: 'xyz'
    }
})
</script>
```

Now you can use trailing URI in your ```Form``` like below.
```
<!-- Following will call POST https://example.com/api/posts -->
<Form action="posts">
...
</Form>
```

**Note: This project is in active development, stay connected for more features**