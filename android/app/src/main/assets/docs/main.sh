# OBTAIN AND BUILD DOCS REPO FOR USE IN APP

DOCS="../docs/"
TMP_DOCS="./tmpdocs"
STATIC_SITE="${TMP_DOCS}/_site/"

# STEP 1: GET THE REPO
rm -rf ${TMP_DOCS}

git clone git@github.com:ideafast/ideafast-devicesupportdocs-web.git ${TMP_DOCS}

# STEP 2: INSTALL DOCS LOCALLY

cd ${TMP_DOCS}

bundle install && bundle exec jekyll build

cd ..

# STEP 3:  MOVE RELEVANT DOCS INSIDE THE APP

# Copy files rather than move so we can re-run as needed.
cp -r ${STATIC_SITE}pat/. ${DOCS}en/
cp -r ${STATIC_SITE}nl/pat/. ${DOCS}nl/
cp -r ${STATIC_SITE}de/pat/. ${DOCS}de/
cp -r ${STATIC_SITE}images/. ${DOCS}images/
cp -r ${STATIC_SITE}assets/. ${DOCS}assets/

# STEP 4: REMOVE DOCS LOCALLY (PREVENT BLOAT)
rm -rf ${TMP_DOCS}

# STEP 5: REPLACE ABSOLUTE URLs FOR RELATIVE

# NOTE: have to set extension to empty string on OSX as it's not GNU sed:
# see https://stackoverflow.com/questions/39325759/sed-on-mac-extra-characters-after-p-command

cd ${DOCS}de/
sed -i '' 's,https://docs.ideafast.eu/de/assets/,../assets/,g' *
sed -i '' 's,https://docs.ideafast.eu/de/,../,g' * 
cd ..

cd ${DOCS}nl/
sed -i '' 's,https://docs.ideafast.eu/nl/assets/,../assets/,g' * 
sed -i '' 's,https://docs.ideafast.eu/nl/,../,g' * 
cd ..

cd ${DOCS}en/
sed -i '' 's,https://docs.ideafast.eu/assets/,../assets/,g' *
sed -i '' 's,https://docs.ideafast.eu/,../,g' *
cd ..

# TODO: The following could be removed but for now does not impact app: 
# 1. JavaScript service worker (its purpose is not for mobile)
# 2. NAV tag (it's hidden on mobile via CSS)