<script>
	import {Form, SetupAjax} from '../lib';
	SetupAjax({
		endpoint: 'https://vymhgbkjbifqfvmjwpbm.supabase.co/rest/v1/',
		headers: {
			apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bWhnYmtqYmlmcWZ2bWp3cGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5MzA0NTAsImV4cCI6MTk3MjUwNjQ1MH0.RbNjrF0WqOlSwNXrEMp413YjTVePyPW9Vc94odn7bI4',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bWhnYmtqYmlmcWZ2bWp3cGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5MzA0NTAsImV4cCI6MTk3MjUwNjQ1MH0.RbNjrF0WqOlSwNXrEMp413YjTVePyPW9Vc94odn7bI4'
		}
	})
	let response;
</script>
{response}
<Form bind:data={response} action="posts">
	<input type="text" name="title" placeholder="Name">
	<input type="text" name="description" placeholder="Email">
	<input type="text" name="sort" placeholder="Phone">
	<button type="submit">Submit</button>
</Form>