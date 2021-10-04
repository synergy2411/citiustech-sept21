
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