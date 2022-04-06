const imagesList = [
  { image: 'https://images.unsplash.com/photo-1578116809550-dd6d72ef084d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60', },
  { image: 'https://images.unsplash.com/photo-1585660006883-bd8c3a1ebcdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1575540616469-cc6185554e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1649094368473-9ca8af321fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1609704675829-e269d9869fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1572536872565-e9b5ce2d93be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1509030034677-7e7fd91edc6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTI4MDcxfHxlbnwwfHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&q=60' },
  { image: 'https://images.unsplash.com/photo-1608577812954-1007a637947f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1640582209428-1598112dd792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1608578065064-586f72a7cc8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' },
  { image: 'https://images.unsplash.com/photo-1506184515391-333e5afa6927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' },
]

export const generateImage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(imagesList)
    }, 1000)
  })
}