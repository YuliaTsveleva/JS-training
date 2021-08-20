console.log('ok');

// исходник

function Post(title='title', text='Lorem ipsum dolor...') {
    this.title = title;
    this.text = text;
};

Post.prototype.updateTitle = function (value) {
    return (this.title = value)
}

const post1 = new Post()
console.log(post1)

// second

function NewPost( imageUrl = '', title = 'title', text = 'Lorem ipsum dolor...') {
    Post.apply(this, [title, text])
    this.image = imageUrl
}

console.log(NewPost.prototype)
NewPost.prototype = Object.create(Post.prototype)
NewPost.prototype.Objectconstructor = NewPost

NewPost.prototype.updateImage = function (url) {
    this.image = url
}

const newPost = new NewPost('https://www.google.com/search?q=%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81+%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sxsrf=ALeKk038OdpIOoh_32D7ffxme2JES9Z8Lw:1628618786111&tbm=isch&source=iu&ictx=1&fir=lI-oKZ8rzp9sEM%252CTsSfl9HKLAQtnM%252C_&vet=1&usg=AI4_-kS1G_wd4G8KGPnDp3q8sknkITuNHQ&sa=X&sqi=2&ved=2ahUKEwjVteHhhafyAhWbR_EDHUYUD1MQ9QF6BAgIEAE#imgrc=lI-oKZ8rzp9sEM')
console.log(newPost)

// third

function BestPost(author, imageUrl, title, text) {
    NewPost.call(this, imageUrl, title, text)
    this.author = author
}

BestPost.prototype = Object.create(NewPost.prototype)
BestPost.prototype.constructor = BestPost

BestPost.prototype.showAuthor = function () {
    console.log(this.author)
}

// new
const bestPost1 = new BestPost('Anatoliy')
console.log(bestPost1)
bestPost1.showAuthor()
bestPost1.updateImage('https://')
bestPost1.updateTitle('My new post')

