# GM Binder to Homebrewery source code conversion script

## Changelog

#### v1.0.1 25/11/2021

Minor update - include `.phb` conversion to `.page`

Add the following conversions:

- .phb > .page


#### v1.0.0 25/11/2021

Initial state of the converter. Currently a script to be stored as a bookmarklet, which is run while on the page [https://homebrewery.naturalcrit.com/new](https://homebrewery.naturalcrit.com/new), with the GMBinder source present in the editor.

Currently supports the following conversions:

- \pageBreakNum > {{pageNumber,auto}}\n\page
  - includes @=====

- \pageBreak > \page
  - includes ======
  
- \columnBreak > \column