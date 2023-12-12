<script lang="ts">
  import { email, minLength, object, safeParse, string } from 'valibot'
  import Input from './Input.svelte'

  const Schema = object({
    name: string([minLength(1, "Can't be empty")]),
    email: string([email('Sorry, invalid format here')]),
    message: string([minLength(1, "Can't be empty")])
  })

  let form: HTMLFormElement
  let error: Record<string, string> = {}

  function handleSubmit() {
    const formData = new FormData(form)
    const result = safeParse(Schema, Object.fromEntries(formData))

    error = {}

    if (result.success) {
      form.reset()

      fetch('https://contact.jhanca-vm.workers.dev', {
        method: 'POST',
        body: JSON.stringify(result.output)
      })
    } else {
      for (const { path, message } of result.issues) {
        const [{ key }] = path!
        error[key as string] = message
      }
    }
  }
</script>

<form
  bind:this={form}
  class="mx-auto max-w-111 w-full grid gap-y-8 lg:mr-0"
  novalidate
  on:submit|preventDefault={handleSubmit}
>
  <Input
    attributes={{
      type: 'text',
      name: 'name',
      placeholder: 'Name',
      autocomplete: 'off'
    }}
    error={error.name}
  />
  <Input
    attributes={{
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      autocomplete: 'off'
    }}
    error={error.email}
  />
  <Input
    tag="textarea"
    attributes={{ name: 'message', rows: 4, placeholder: 'Message' }}
    error={error.message}
  />
  <button class="btn ml-auto">Send Message</button>
</form>
