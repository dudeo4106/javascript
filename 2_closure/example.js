function factoryPerson(age){
    return {
        getAge : function (){
            return age;
        },
        setAge : function(_age){
            age = _age
        }
    }
}
a = factoryPerson(10);
b = factoryPerson(20);

console.log(a.getAge());
console.log(b.getAge());

b.setAge(100);

console.log(a.getAge());
console.log(b.getAge());