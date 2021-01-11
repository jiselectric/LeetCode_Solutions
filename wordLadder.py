class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList:
            return 0 

        qu = [(beginWord, 1)]
        size = len(beginWord)
        visit = {}
        permute = {}

        for word in wordList:
            visit[word] = False

        for word in wordList:
            for i in range(size):
                op = word[:i] + '*' + word[i+1:]

                if op not in permute:
                    permute[op] = [word]
                else:
                    permute[op].append(word)

        while qu:
            cur, cnt = qu.pop()

            visit[cur] = True

            if cur == endWord:
                return cnt 

            for i in range(size):
                op = cur[:i] + '*' + cur[i+1:]

                if op not in permute:
                    permute[op] = []
                else:
                    for poss in permute[op]:
                        if visit[poss] == False:
                            qu.insert(0, [poss, cnt+1])
        return 0 
