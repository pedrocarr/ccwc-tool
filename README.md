# wc-tool in javascript
Go solution to [Coding Challenges](https://codingchallenges.fyi/challenges/intro) first challenge: [build your own wc tool](https://codingchallenges.fyi/challenges/challenge-wc)

## Make the command executable

```chmod +x ./cmd/ccwc/cli.js```

The command is now executable and can be executed globally by ```npm link```

Note that the alias for the command is on package.json and you can only use ```ccwc [options] [filename]```

## Testing

### Step 1 - Count Bytes

```bash
wc-tool % wc -c test.txt
  342190 test.txt
wc-tool % ccwc -c test.txt
342190  test.txt
```

### Step 2 - Count Lines

```bash
wc-tool % wc -l test.txt
    7146 test.txt
wc-tool % ccwc -l test.txt
7146    test.txt
```

### Step 3 - Count Words

```bash
wc-tool % wc -w test.txt
   58164 test.txt
wc-tool % ccwc -w test.txt
58164   test.txt
```

### Step 4 - Count Characters
```bash
wc-tool % wc -m test.txt
  339292 test.txt
wc-tool % ccwc -m test.txt
339292  test.txt
```

### Step 5 - Default Options - Return Lines, Words and Bytes and the filename
```bash
% wc test.txt
    7145   58164  342190 test.txt
wc-tool % go run ./cmd/ccwc test.txt
7145    58164   342190  test.txt
```

### Step 6 (Final Step)
```bash
wc-tool % cat test.txt | wc -l
    7146
wc-tool % cat test.txt | ccwc -l
7146
```

