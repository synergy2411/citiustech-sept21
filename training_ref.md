
- JavaScript vs TypeScript
- interfaces / types
- Complex Types - Interface/ Types / Classes
- Builtin Type - primitive, reference types + void, enums, tuple, union, any, array, unknown, undefined
- Access Modifiers
- Static Keyword
- ES6 Features : Arrow functions () => this keyword,, REST/SPREAD (...), block scope variables (let/cosnt)
- generate tsconfig.json


- Generics : Methods, Classes, Contraints
- Namespaces 
- Modules : commonJS (require(), module.exports) , ES6 Module (export / import) | Named/Default
- Decorators
 : Decorator Factory will run from Top to Bottom
 : Decorator Functions will run from Bottom to Top
- Method overloading

# to generate typescript.json 
> npx tsc --init



# Angular building blocks
- Components : creates the UI; reusable
- Directives : special markers on UI - ngFor, ngIf, ngClass, ngStyle, ngSwitch, Custom directives
- Pipes : Data transformation; Readable format; Data Format; formatting UI etc uppercase, lowercase, currency, json, date, async, percent; Custom pipes
- Services : DI, State Management; Singleton; Component interaction using services
- Modules : Container for inter-related code; encapsulation; plugable; 

@Component()
@Directive()
@Pipe()
@NgModule()
@Injectable()
export class User{}


# Install Angular CLI Tool
> npm install @angular/cli@11 -g
> ng v
> ng new users-app
> cd users-app
> ng serve --hmr -> http://localhost:4200


- Atomic property for Web page
> Atoms : Smallest unit; reusable
> Molecules :
> Organism : 
> Templates : 
> Pages

# to install Bootstrap 
> npm install bootstrap@4

# ng Commands
- ng generate component path/to/comp/ComponentName
- ng g c componentName
- ng g d directiveName
- ng g p pipeNAme
- ng g m moduleNAme
- ng g s serviceName



- Creating angular Project
- Angular Bootstrap Process
- Component creation
- Property Binding + Event Binding
- 2 Way Data Binding / [(ngModel)]
- Parent / Child Communication


# Full day
- First break : 11:30 (20 minutes)
- Second break : 1:30 (60 minutes)
- Third break : 4:00 (20 minutes)


- Components : Data / Content Projection, Life cycle hooks/methods
- Directives : Attribute (ngClass, ngStyle) , structural (ngIf, ngFor, ngSwitch)
- note-app


- ViewChild - always takes the first occurance of element
    : access the DOM element reference into class - #ref
    : acces the child component
- ViewChildren - List of all children
- ContentChild - to access projected content
- ContentChildren

- ng g c practice/components/decorators-demo

- Smart | Container | Parent : contains other component as well as business logic
- Dump | Presentational | Child : receives the data from parent to create the UI.

- Users Comp (Smart)
    - UserImage (Dump)
    - UserInfo (Dump)

# Life Cycle Methods:
- ViewChild / ViewChildren : can access the template element after the view initialize (ngAfterViewInit)
- ContentChild / ContentChildren : can acces the projected contents after the content initialize (ngAfterContentInit)



- Adding Stars using Font-Awesome

- Attribute Directive
    : ngClass - dynamically add/remove CSS Classes
        - Array : CSS Classes
        - Object : Property name as CSS Class {'feature' : false}
    : ngStyle - dynamically add/remove CSS styles


- @HostBinding - Binds the host element property with the Class model
    : <h2 appHighlight> </h2>
- @HostListener - Listens to the event triggered on Host Element and binds it to class methods
- ElementRef : reference of DOM Element
- Renderer2 : Access to DOM

- Structural Directive : templates <ng-template>
    : TemplateRef - reference of DOM Template
    : ViewContainerRef - Container for Template

    <div>
        <p> This is paragraph </p>
    </div>

    - Create the Custom structural directive which will perform opposite of 'ngIf'


- Async Pipe

# Async JavaScript 
- Callbacks
- Promises
- Async...Await
- Observables using RxJS
- Async Pipe

- Impure Pipe => both pure and impure (mutable and immutable changes)
    : array.push()
    : user.name = ""
- Pure Pipe => pure change (immutable changes)
    : array = []
    : user = {name : ""}


# Notes App



# Forms
    : Template driven -> "ngForm"
    : Model driven / Reactive Forms -> FormControl, FormGroup FormBuilder
    - State and Classes to Form / Form Controls
     : ngTouched | ngUntouched
     : ngValid | ngInvalid
     : ngPristine | ngDirty


# Services : implements DI; Singleton; client-side business logic
    : DI - Design Pattern; loosely coupled; reusability; 
    : Singleton - Only one instance; Design pattern; Shared the same instance within the scope
    - Service provided in Root Module -> Singleton instance will be available application-wide
    - Service provided in Any Component -> Override the previous DI tree, creates new scope for service; Singleton instance will be applicable to self as well as child component, but NOT in other services.
    : Self Injected Service - Tree-shakable; Will NOT become the part of final buil, if not utilized in App
    : Platform Injection - All angular app running on browser will receive the same singleton instance





- RxJS Library : Async Tasks | Observable

- Observable : stream on which data flow at certain time interval

- Promises vs Observables
    : Promises 
        - Handle one value at a time
        - Eagerly consumed
        - Always executed Asynchronously
        - Are NOT Cancelable
        - Promise chain hell
        - Are One shot

    : Observables 
        - handles multiple value
        - executes when subscribe; Lazily consumed
        - Async and Sync 
        - Can Cancel / Unsubscribe in between; 
        - Operators (Creational, Filtering, Tranformation, Utility, Error handling etc)
        - Flatten the chain
        - Observe the data source

  # Creational Operators
    // - from : creates observable from Array, Promise
    // - of : creates observable from supplied arguments
    // - range : creates observable with certain range
    // - timer : creates observable by emitting data after certain duration
    // - fromEvent : creates observable from an event
    // - new Observable() : creates observable from scratch
    // - ajax : creates observable by making remote server call (Ajax call)

# Transformation Operators
    - map
    - switchMap
    - concatMap
    - mergeMap

# Filtering Operators
    - pluck
    - filter
    - reduce
    - take(n) : takes only n elements
    - takeWhile : takes all elements till the time condition is true
    - takeUntil : takes all element till the next observable finish it.
    - debounceTime(ms) : emits the last value after given time in ms.
    - sampleTime(ms) : emits data for specified time interval
    - auditTime : emits after specified time.
    - throttleTime : emits data without delay and then after specified time.

# Joining Operators
    - ForkJoin : joins two observable values and give the combination as output
    - CombineLatest : joins two observable values and give the final value as output

# Utility Operators
    - tap : logging the observable values; great for debugging
    - throwError : will throw the observable error
    - delay:  executes with some delay
    
# Subject
    - Subject : observable as well as observer - next, error, complete, subscribe, pipe
    - BehaviourSubject : Seed value
    - ReplaySubject : record the observable emitted value for n number of times
    - AsyncSubject : 


- Stateless Reactive Services - 

- Http Calls / HttpClientModule -> Remote Server Call (GET, POST, PATCH, DELETE)

# json-server

> install json-server -> npm install json-server -g
> create JSON file
> json-server --watch JSONFileName
> Make REST Calls


# Topics to include
- Form Array
- JWT Auth
- Breadcrumb
- local/session storage