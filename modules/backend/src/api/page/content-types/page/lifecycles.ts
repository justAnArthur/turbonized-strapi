import { env } from "@strapi/utils"

function handleRevalidate({ result }) {
  const url = env('FRONTEND_URL')

  if (!url)
    return

  const path = url + "/" + result.locale + "/revalidate"

  console.log('Sending revalidating request', path)

  fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'api::page.page',
      slug: result.type[0].slug,
      pageType: result.type[0].__component.replaceAll('blocks.', '')
    })
  })
    .catch(() => console.warn('There is an error while revalidating', path))
}

export default {
  afterCreate: handleRevalidate,
  afterUpdate: handleRevalidate
}
