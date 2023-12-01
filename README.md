# wc-tool in javascript
Javascript solution to [Coding Challenges](https://codingchallenges.fyi/challenges/intro) first challenge: [build your own wc tool](https://codingchallenges.fyi/challenges/challenge-wc)

## Make the command executable

```bash
chmod +x ./cmd/ccwc/cli.js
```
The command is now executable and can be executed globally by

```bash
npm link
```

Note that the alias for the command is on package.json and you can only use

```bash
ccwc [options] [filename]
```

## Testing

### Step 1 - Count Bytes

```bash
js-ccwc-tool % wc -c test.txt
  342190 test.txt
js-ccwc-tool % ccwc -c test.txt
342190  test.txt
```

### Step 2 - Count Lines

```bash
js-ccwc-tool % wc -l test.txt
    7146 test.txt
js-ccwc-tool % ccwc -l test.txt
7146    test.txt
```

### Step 3 - Count Words

```bash
js-ccwc-tool % wc -w test.txt
   58164 test.txt
js-ccwc-tool % ccwc -w test.txt
58164   test.txt
```

### Step 4 - Count Characters
```bash
js-ccwc-tool % wc -m test.txt
  339292 test.txt
js-ccwc-tool % ccwc -m test.txt
339292  test.txt
```

### Step 5 - Default Options - Return Lines, Words and Bytes and the filename
```bash
js-ccwc-tool % wc test.txt
    7146   58164  342190 test.txt
js-ccwc-tool % ccwc test.txt
7146    58164   342190  test.txt
```

### Step 6 (Final Step)
```bash
js-ccwc-tool % cat test.txt | wc -l
    7146
js-ccwc-tool % cat test.txt | ccwc -l
7146
```
### Step 7 (Run Tests)
```bash
npm test
```
