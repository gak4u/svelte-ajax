<script>
	import {Form, ajax} from '../lib';
	let response;
</script>
{response}
<Form bind:data={response}>
	<input type="text" name="name" placeholder="Name">
	<input type="text" name="email" placeholder="Email">
	<input type="text" name="phone" placeholder="Phone">
	<input type="text" name="message" placeholder="Message">
	<button type="submit">Submit</button>
</Form>