# GM Binder to Homebrewery source code conversion script

## Changelog

#### v1.0.4 29/05/2025

Note block conversion was skipping the last two non-space characters inside the block. I cannot find any reason for this to be the case, so I have altered the regex to stop that from occurring.

#### v1.0.3 ???

Apparently I forgot to record notes for v1.03. ¯\\\_(ツ)\_/¯

#### v1.0.2 25/11/2021

Homebrewery would sometimes struggle to process large GMBinder brews prior to processing. Changed to process the source text from an input `prompt` text box, rather than via the Homebrewery local storage.


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
