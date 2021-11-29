# GMBinder to Homebrewery Converter

This is a quick & dirty project to convert GMBinder source to Homebrewery source.

## How to use this project

#### Installation

1. Create a new bookmark in your browser. Chrome is strongly recommended, as it is the only browser Homebrewery officially supports. It is likely that you will get unexpected results with other browsers.

2. Give the bookmark whatever name you like - "GMB>HB", for example.

3. Copy the contents of `src/bookmarklet.js` into the URL field.

4. Click "Save".


#### Updating the Bookmarklet

1. Right click on the bookmark and select Edit.

2. Copy the contents of the new/updated `src/bookmarklet.js` into the URL field.

3. Click "Save".


#### Use

1. Navigate to https://homebrewery.naturalcrit.com/new.

2. Click the bookmark created during the installation process.

3. Paste the GMBinder source text into the prompt window that appears. Click OK to start the conversion process.

4. On completion, the page will reload, and the converted project should now be visible in the editor.

5. Click "SAVE" in the Homebrewery editor to commit the project to your Homebrewery account.


#### Customizing the script

In order to add additional items to automatically search and replace, follow these steps:

1. Download and open `src/boookmarklet.js`

2. On line 5, immediately following `const replacementList = [` enter the following:  
    {term: "YOUR_SEARCH_TERM_HERE", text: "YOUR_REPLACEMENT_TEXT_HERE"},

3. Repeat for as many custom search and replacement terms as you like.

4. Install as per the normal installation instructions, substituting the content of your customized `bookmarklet.js` in step 3.