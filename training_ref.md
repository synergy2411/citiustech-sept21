
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