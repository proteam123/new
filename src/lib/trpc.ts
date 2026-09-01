export const trpc = {
  publicFiles: {
    list: {
      useQuery: () => ({ data: [], isLoading: false })
    }
  },
  files: {
    list: {
      useQuery: () => ({ data: [], isLoading: false })
    },
    getUploadUrl: {
      useMutation: () => ({ mutateAsync: async () => ({ uploadUrl: "", fileUrl: "" }) })
    },
    saveFileRecord: {
      useMutation: () => ({ mutateAsync: async () => {} })
    },
    delete: {
      useMutation: () => ({ mutateAsync: async () => {} })
    }
  }
};
