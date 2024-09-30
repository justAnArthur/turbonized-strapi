export default {
  register(app) {
    app.registerPlugin({
      id: 'extend-preview-button',
      name: 'extend-preview-button',
    });
  },

  bootstrap(app) {
    app.registerHook('plugin/preview-button/before-build-url', ({data, draft, published}) => {
      let draftQuery = {...draft?.query ?? {}};

      if (draftQuery && data.type?.[0]?.__component.startsWith('blocks.')) {
        draftQuery.pageType = data.type[0].__component.replaceAll('blocks.', '')
        draftQuery.slug = data.type[0].slug
      }

      return {
        draft: {
          ...draft,
          query: {
            ...draftQuery,
          },
        },
        published,
      };
    });
  },
};
