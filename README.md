# Ember-pika-date-time

[![npm version](https://badge.fury.io/js/ember-pika-date-time.svg)](http://badge.fury.io/js/ember-pika-date-time)
[![Ember Observer Score](http://emberobserver.com/badges/ember-pika-date-time.svg)](http://emberobserver.com/addons/ember-pika-date-time)

A component for dealing with Date and Time pickers with merged values.

## Installation

`ember install ember-pika-date-time ember-pikaday`

## Use

If you would like to use default inputs, you can just use the inline block mode of this component:

```hbs
<label>
  Due date:
  {{pikaday-with-time startValue=startDate binding=binding}}
</label>
```

If you would like to specify the way the inputs are styled, `pikaday-with-time` yields both the bound `date` and `time`:

```hbs
<label>
  Due date:
  {{#pikaday-with-time startValue=startDate binding=binding as |date time|}}
    <div class="mdl-textfield mdl-js-textfield">
      {{pikaday-input class="mdl-textfield__input" value=date}}
    </div>

    {{mdl-textfield type="time" value=time}}
  {{/pikaday-with-time}}
</label>
```
