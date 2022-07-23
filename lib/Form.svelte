<script>
    import ajax from './ajax';
    export let data = null;
    export let errors = null;
    export let action = '';
    export let method = 'POST';
</script>
<form use:ajax={{next: (res, err) => {
    if(!err)
        data = res;
    else
        errors = err;
}}} {action} {method}>
    <slot/>
</form>