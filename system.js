class User {
    constructor (userId, password, registerDate, email) {
        this.userId = userId;
        this.password = password;
        this.registerDate = registerDate;
        this.email = email;
        this.name = this.name;
    }

    logIn() {
        console.log (`${this.name} has logged in.`)
    }

    verifyPassword(password) {
        return this.password === password;
    }

    updateProfile(name, email, password) {
    this.name = name;
    this.password = password;
    this.email = email;

    console.log('Updated your details successfully');
}
};

class Tutor extends User {
    constructor(name, email, password) {
    super(name, email, password);

    this.courses = [];
    }

    createCourse(course) {
     this.courses.push(course);

     console.log(`${course.title} has been uploaded.`);
    }

    updateCourse(courseId, newContent) {
        const course = this.findCourse(courseId);

        if (course) {
            course.updateContent (newContent);

            console.log(`${course.title} has been updated`);
        }
        else {
            console.log('Courses not found.');
        }
    }

    findCourse(courseId) {
        return this.courses.find(course => course.title === courseId);
    }
}

class Student extends User {
    constructor (name, email, password) {
    super(name, email, password);

    this.subscriptions = [];
    this.cart = [];
    this.activeCoupon = null;
    }

    addToCart(course) {
        this.cart.push(course);
        console.log(`${course.title} added to your cart`);
    }

    removeFromCart(courseId) {
        const index = this.cart.findIndex((course) => course.id === courseId);

        if (index !== -1) {
            const remove = this.cart.splice(index,1)[0];
            console.log(`${remove.title} removed from cart`);
        }

        else {
            console.log('This course is not in your cart');
        }
    }

    addActiveCoupon(coupon) {
        this.activeCoupon = coupon;

        console.log(`${coupon.code} added`);
    }

    checkout() {
        if (this.activeCoupon) {
            console.log(`${this.activeCoupon.code} applied`);

            for (const course of this.cart) {
                const discount = course.price * (1 - this.activeCoupon.discountPercentage / 100);

        this.subscriptions.push({course, price: discount});

        console.log(`Subscribed to ${course.title} using coupon code.`);
            }
        }
    else {
        for (const course of this.cart) {
            this.subscriptions.push({course, price: course.price});

            console.log(`Subscribed to ${course.title}.`);
        }
    }

    this.cart = [];
}
    activeSubscription() {
        console.log('Your active subscriptions:');

        for (const course of this.subscriptions) {
            console.log(`- ${course.title}`);
        }
    }
}

class Course {
    constructor (title, content) {
        this.title = title;
        this.content = content;
    }

    updateContent(newContent) {
        this.content = newContent;
    }
}

class Coupon {
    constructor(code, discountPercentage) {
        this.code = code;
        this.discountPercentage = discountPercentage;
    }
}

//Example
const tutor = new Tutor('Emeka Seven', 'Seven@mail.com', 'password');
const student = new Student('Victor Ubahakwe', 'Victor@mail.com', 'password');
const coupon = new Coupon('JANUARY2024', 100); //100% discount

tutor.logIn();
tutor.createCourse(new Course(1, 'Backend for beginners', 'content'));
tutor.createCourse(new Course(2, 'Devops fundamentals', 'content'))
tutor.updateCourse(1, 'updated content');

student.logIn();
student.addActiveCoupon(coupon);
student.addToCart(new Course(2, 'devops fundamentals', 'content'));
student.addToCart(new Course(1, 'Backend basics', 'content'));
student.checkout();
student.activeSubscription();