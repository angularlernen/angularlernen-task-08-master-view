Master View
===========

### Introduction

A common UX pattern is the so called _Master / Detail_ pattern.

The _Master_ represents the collection of _entities_, the _Detail_ represents a particular _entity_ out of this collection.

In this task we'd like to focus on the _Master_.

The _Master_ is responsible for:
- showing all entities of the collection (here: either _events_ or _profiles_)
- providing trigger (buttons, links, ...) for actions on the collection (_add_, _remove_, _filter_, ...)
- providing navigation trigger (_routerLink_) from the markup representing a particular entity of the collection to the corresponding _Detail_ view.

### Task

#### event-collection.component.ts / EventCollectionComponent

1. Use the CLI to create a _component_: `ng g c events/event-collection`
2. Provide a public property `events: EventResponse[] = []` on this component. The goal is to fill this property with data using the `eventResource: EventResource` injectable.
3. Inject an instance of the `EventResource` injectable using constructor injection. On the components class: `constructor(private eventResource: EventResource) {}`
4. Use the `ngOnInit()` lifecycle hook in order to load the data (we'll see later why).
5. In the _event-collection.component.html_: Use the `*ngIf` structure directive to iterate over the array of events and render for each event a nice view.
6. For now (yeah... that's not the final solution), export the component and use it directly in _app.component.html_

#### profile-collection.component.ts / ProfileCollectionComponent

6. Repeat the steps as given above for the _profile collection_ (if you like).

### HOWTOs

In the _profile-collection.component.ts_:

```ts
import { EventResponse } from '../../api/event/event.response';
import { EventResource } from '../../api/event/event.resource';
```

It's fine to render only the title for now.

If you have _bootstrap 4_ installed...

... here is the html markup for one event:

```html
<div class="col-12 col-md-6 col-lg-4 mb-4" *ngFor="let event of events">
    <div class="card">
      <img class="card-img-top img-fluid" [src]="event.pictureUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{event.title}}</h5>
        <p class="card-text">{{event.shortDescription}}</p>
        <a href="event.id" class="btn btn-microevents">View Details</a>
      </div>
    </div>
  </div>
```


