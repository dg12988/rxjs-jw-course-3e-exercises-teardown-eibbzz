import { Observable } from "rxjs";


const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Chalie');  
    subscriber.complete();
  }, 2000);
});

console.log('Before subscribe');
observable$.subscribe(value => console.log(value));
console.log('After subscribe');
