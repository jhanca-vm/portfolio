declare global {
  namespace App {
    interface PageData {
      projects: Array<{
        id: string
        name: string
        url: string
      }>
    }
  }
}

export {}
