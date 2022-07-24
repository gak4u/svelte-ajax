<script>
    import {getContext} from 'svelte';

    export let name = null;

    const store = getContext('formInfo').getStore();
</script>
{#if name && $store && $store.error && $store.error.messages && $store.error.messages.length > 0 && $store.error.messages.find(m => m.field === name)}
    <p>{$store.error.messages.find(m => m.field === name).message}</p>
{/if}