<script>
	import {Form, SetupAjax} from '../lib';
	SetupAjax({
		endpoint: ''
	})
	let response;
</script>
{response}
<Form bind:data={response} action="uploadImage">
	<input type="text" name="name" placeholder="Name">
	<input type="text" name="email" placeholder="Email">
	<input type="text" name="phone" placeholder="Phone">
	<input type="text" name="message" placeholder="Message">
	<button type="submit">Submit</button>
</Form>