<script>
    import ajax from './ajax';
    import {writable} from 'svelte/store';
    import {setContext} from 'svelte';
    
    export let data = null;
    export let error = null;
    export let action = '';
    export let method = 'POST';

    export const store = writable({
        data, error
    });

    setContext('formInfo', {
		getStore: () => store,
	});
</script>
<form use:ajax={{next: (res, err) => {
    if(!err){
        data = res;
        $store.data = data;
    }else{
        error = err;
        $store.error = error;
    }
}}} {action} {method}>
    <slot/>
</form>