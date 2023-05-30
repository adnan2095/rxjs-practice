# RxjsPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

The main purpose of this project is to add practice examples for rxjs. 

I will also have some git uses that I've not practiced a lot, or properly so far in my career.

## Helpful Links
1. [Progress Bar Explanation in detail](https://dev.to/ajitsinghkaler/rxjs-tutorials-progress-bar-ex-2-1-4np2)

## Big Targets
1. All kinds of mappings
2. All kinds of major pipes

## Covered Topics

This list wil be updated continuously as I develop further features in it using rxjs. According to [Learn RXJS](https://www.learnrxjs.io/learn-rxjs/operators), there are 98 operators in RxJs, and we'll try to cover every single one.

1. `ajax`
    - Instead of using HttpClient, I used Rxjs Ajax (which I'm sure angulr uses too, but you never know :stuck_out_tongue_winking_eye: )
2. `map`
    - Mapped response to filter out the junk data coming from ajax call
    - So far, as per my research, we cannot use map and filter (rxjs) one together as both get a similar array. Filter does not get a singlular object one by one as expected. So we can filter elements in map. Will continue updating it as we go.
3. `filter`
    - Usage is still not clear to me. Will keep on digging until I find more.
4. `from`
    - Successfully converted array of objects into an observable, piped it, and subscribed it. It is subscribing to each individual value and we can process it accordingly.
5. `take`
    - Extracts the number of responses defined instead of all the response. It completes immediately when the number is achieved instead of waiting for the response to be complete.
6. `startWith`
    - Adds a value before the incoming response/subscription value. I need to know a valid use case for this one.
7. `race`
    - The most fun operator I've encountered. We can race two observables, and the first one to get to the finish line wins, the other is cancelled. Its a beautiful feature **chef's kiss** 
8. `switchMap`
    - Used for subscribe to to inner observable and cancel any previous ones
9. `fromEvent`
    - Used to add event listener on a DOM element
10. `scan`
    - Used for state management. DID NOT KNOW THAT before :sweat_smile:
    - Extended operator for `reduce` in arrays, and streams but reduce only provides the final accumulated value. This provides the value on every iteration.
    - It has an `accumulated` and `current` value and we can process that as we go. Pretty neat.
    - **10.1** `withLatestFrom`
        - Combine source observable with the values emitted by inner observables.
        - Emits new value only when there is new emission in the guiding stream. Now what is guiding stream? It is the source/higher order observable. If I'm wrong, can someone comment and put me on the righteous path as I am just a man.
        - Calculates **ONLY** when the source emits.
11. `concatAll`
    - This combines all inner observables and emits them one by one, sequentially. This is a flattening operator
    - Only has one active subscription at a time.
    - When all done, higher order (outer) observable is emitted.
12. `delay`
    - Adds delay in emitting the observable with the given time (in ms of course)
13. `of`
    - Used to emit values sent as input.
14. `share`
    - Used to share (multicast) a single subscription to underlying source observable.
    - To understand `share`, you need to know about `multicast` and `refCount` (explained below, don't worry honey)
    - `multicast`
        - A mechanism to introduce a Subject into the observable stream.
        - This allows sharing a single subscription to underlying stream between multiple subscribers.
        - Basically, casting values in multiple observables at once. Wow :heart_eyes: but I still don't get it :neutral_face:
        - To understant `multicast` properly, I dived into this [link](https://indepth.dev/reference/rxjs/operators/multicast)
        - **My Explanation**
            - When we need to subscribe twice to an observable (depends on the use case tbh), add `multicast` pipe with `new Subject()` as return.
                - Side note: You will need to typecast as `ConnectableObservable<{type}>` where type can be anything you want depending on the expeted response.
            - This will do nothing yet, as there is the final link called `connect`. To do this, you will need to simply do `obs.connect` and this will trigger a new magic.
            - Once all these steps are done, you will be able to observe that there is only one response observed of maybe a thousand subscriptions made by our dear observable. 
            - Alas, all of this is deprecated now. Use `share` now :stuck_out_tongue_winking_eye:
    - `refCount`
        - As long as there is at least one subsriber to our dear shared observable, this operator keeps an active subscription to the source observable. When all subscribers have unsubscribed, it will stop the active subscription too. Get it? No? I didn't too baby :kissing_heart:
        - See when we use `refCount`, we don't need to explicitly use **`connect`** in a **ConnectableObserver**
    - Basically, `share` manages everything `multicast` did plus `refcount`, but internally, so you don't have to worry about weird terms like `refCount, connect, ConnectableObservable` etc.
    - Like `multicast`, `share` introduces a Subject into the stream automatically (which handles sharing, not the operator itself mind you)
15. `count`
    - Pretty self explanatory don't you think?
    - This mathematical operator counts the number of values emitted from the source observable.
    - Returns an output observable as a number, which specifies the number of elements emitted by the observable.
    - It returns the value **after** the source observable is completed.
16. `withLatestForm`
    - Useful when we have an inner observable, that can have multiple emissions but we only want to use the latest emission value.
    - Note that this will only trigger when the source observable will make an emission.
    
## Testing

The goal is to utilize rxjs' all features to make sure the understanding of the developer is matured. The test will also be updated, with complete documentation on how to execute tests of a certain operator.

## Backend

We will be using [JSON Placeholder](https://jsonplaceholder.typicode.com/) API to test out

## Project Structure

This will contain a side bar, which will be populated as we go.

Main page will consist of a list view (table), with an add button, delete button, and so on.

We will incorporate polling to fetch updated list every 1 minute as well.
