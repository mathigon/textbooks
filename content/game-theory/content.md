# Game Theory

## The Prisoners’ Dilemma

> section: prisoners
> url: /world/Game_Theory#prisoners-dilemma
> color: "#8032AD"
> level: Intermediate

In life, we often have to make decisions about what to do - and sometimes, the consequences of those decisions affect other people around us. For example, if you decide to take the last two biscuits from the plate instead of one, it’ll mean there aren’t any left for others. But if you leave both biscuits there and go back for one later, other people may have taken them and you’ll miss out!

__Game Theory__ is the area of mathematics where we study how people’s behaviour and decisions interact - it allows you to consider what the best decision might be, given what other people are likely to choose - and consider what other people’s motivations are in their decision-making. Game theory often involves making assumptions about how people will behave - for example, that they’ll do whatever will result in the best outcome for them personally - and it can be applied to situations from world politics and economics all the way down to how many biscuits to take.

As a simple example, imagine you live in a country where they don’t have a strict rule about which side of the road you drive on, and you’re allowed to choose, left or right. If you’re driving along a road with another car coming in the opposite direction, you have a choice to make.

| You drive on the left  | The other car drives on the left  | [[Everything’s fine! | It’s very bad!]] |
| You drive on the left  | The other car drives on the right | [[Everything’s fine! | It’s very bad!]] |
| You drive on the right | The other car drives on the left  | [[Everything’s fine! | It’s very bad!]] |
| You drive on the right | The other car drives on the right | [[Everything’s fine! | It’s very bad!]] |

---

We can represent information about choices like this in a __payoff matrix__ – this shows the possible options for each player along the top and left, and the outcome for each combination of choices in the square where that row and column cross.

|       | Left           | Right          |
| Left  | [[Good | Bad]] | [[Good | Bad]] |
| Right | [[Good | Bad]] | [[Good | Bad]] |
{.payoff-matrix}

---

Let’s complete this payoff matrix for the game ‘rock, paper, scissors’:

[some kind of pop-out reminder of how the rules of the game work - stone blunts scissors, paper wraps stone, scissors cut paper]

Player 1 vv Player 2 >>
Rock
Paper
Scissors
Rock
[[ Draw | Player 1 wins | Player 2 wins]]
[[ Draw | Player 1 wins | Player 2 wins]]
[[ Draw | Player 1 wins | Player 2 wins]]
Paper
[[ Draw | Player 1 wins | Player 2 wins]]
[[ Draw | Player 1 wins | Player 2 wins]]
[[ Draw | Player 1 wins | Player 2 wins]]
Scissors
[[ Draw | Player 1 wins | Player 2 wins]]
[[ Draw | Player 1 wins | Player 2 wins]]
[[ Draw | Player 1 wins | Player 2 wins]]

A better way to represent information about how the situations are good and bad for different players is to assign each a score for each player. For example, the situation ‘Player 1 wins’ could be represented by the pair of numbers (1,-1) - here the first number represents how good the situation is for Player 1, and the second for Player 2. A draw could be written as (0,0).

[Some kind of button to convert the information in the table above to pairs of numbers]

We say that this game is symmetric, since there are equally many positive outcomes for each player. We also say it is a zero-sum game, because if one player wins, the other loses - and if you add together the numbers in each box, the sum is zero.

In this game, there’s no strategy which always leads to a win. This is because there is no one ‘best’ object to choose - whichever one you pick, there’s always one that beats it and one that loses to it, and unless you can know in advance which object your opponent is going to pick, you can’t know which one is best to choose.

If we were to change the game so that there were other objects with different properties, this payoff matrix might change.

[the option to add more objects to the game which interact in different ways with the ones there]

---

In real life, games like this aren’t really this mathematical. You might play multiple games, and your opponent’s behaviour in previous games might give you a hint as to what they will do in the next one. For example, repeatedly making the same choice might convince your opponent you’re going to keep doing that, in which case they might choose their next move to beat you - but you can just switch to the third option, beating them.

[a graphic showing this where the pairs of moves appear sequentially]

While game theory can tell you what to do when the other players are all playing rationally and there are obvious advantages to certain strategies, it doesn’t help when you need to predict someone’s behaviour, especially when being unpredictable (like in rock-paper-scissors) gives you an advantage.

---

A payoff matrix like this can also be used to explore strategies in games where it’s not just win or lose, and different outcomes can be better or worse for the players - if the numbers involved aren’t all 0, 1 or -1. In this situation, players might find they can choose strategies based on the potential benefits of that choice.

A well-known example in game theory is called the Prisoner’s Paradox, or sometimes the Prisoner’s Dilemma. In this, two prisoners have been caught in the process of committing a small crime (punishable by a year in prison) and are being held by the police. The police suspect them both of being involved in a more serious crime (punishable by 3 years in prison), but they don’t have enough evidence to convict either of them of the serious crime.

If they both remain silent, they’ll both go to prison for a year for the lesser crime. If one of the prisoners agrees to testify against their partner about the serious crime, the partner can be charged with it, and if this happens, the police will agree to waive the lesser charges and set the testifying prisoner free.

If both prisoners agree to testify, they will both serve 2 years (a compromise sentence, as they can both be convicted of the serious crime, but have time taken off for having cooperated). Unfortunately, the prisoners are not allowed to talk to each other, or agree on a strategy - they each need to decide what to do by themselves.

[Let’s insert an interactive game here, where students can play the prisoners paradox a couple of times, before moving on to the mathematical analysis. The “computer” chooses randomly between testifying and silence.]

Let’s complete the payoff matrix for this situation:

Prisoner 1 vv Prisoner 2 >>
Remain silent
Agree to testify
Remain silent
([-1],[-1])
([-3],[0])
Agree to testify
([0],[-3])
([-2],[-2])

---

[For words ‘if they both remain silent’ in the paragraph above (and the one below), and ‘if one of the prisoners agrees to testify’ and ‘if both prisoners agree to testify’ in the paragraph above, when students hover over this part, we can highlight the corresponding row + column in the matrix]

This places our two prisoners in an interesting situation. The best thing for both of them would be if they both remain silent - then the total amount of prison time served will only be [2] years.

Now let’s imagine that we are Prisoner 2. If we somehow know that Prisoner 1 will remain silent, we would get the best outcome if we [[agree to testify | stay silent]] (0 years, rather than 1 year). If we know that Prisoner 1 will agree to testify, we would get a better outcome if we [[also testify | stay silent]]. In order words, whatever Prisoner 1 does, Prisoner 2 can get the best outcome for themselves if they testify.

Of course, exactly the same argument works with the prisoners the other way around - so the likely outcome is that both prisoners testify, and receive [[2]] years each in jail.

This situation is described as a paradox, because both prisoners could have received a reduced sentence if they had both remained silent - but testifying was still their best option. Agreeing to testify can be considered as being both better and worse at the same time, in different ways.

Similar paradoxes can be found in many areas of real life, although they rarely have a precise payoff matrix like the example above. For example, this can explain why large companies like Apple and Samsung, or McDonalds and Burger King spend so much money on advertising – knowing that their opponents would take advantage if they didn’t. This is also why many countries have laws against cooperation or “price fixing”.

---

One of the four outcomes in the Prisoner’s Paradox has the property that neither player can gain anything by changing their strategy. This is the one in which Prisoner 1 [[agrees to testify | remains silent]] and Player 2 [[agrees to testify | remains silent]].

We call this type of situation a Nash Equilibrium - named after the mathematician John Forbes Nash Jr, who was one of the early pioneers of study in game theory. Nash showed that such an equilibrium state exists in all finite games - but it’s not always the best outcome for all players (as seen in our example).

[embedded video: https://www.youtube.com/watch?v=LJS7Igvk6ZM]

Another nice example of Nash equilibrium is in modelling traffic on roads. Imagine a city has a road network as shown in the example below, with two possible routes from A to D, one via B and one via C. In the diagram, the numbers marked on the roads show how long it takes to drive along the road: for example, the route from A to B takes [[1 hour]] to drive along, and the route from B to D takes [[2 hours]].

In the road network as shown, travelling via B takes [[the same amount of time | more time | less time]] than travelling via C, so assuming everyone chooses logically, half the cars will take each route, and the roads will be equally busy - since there’s no advantage of choosing one route over another.

Now let’s make our model a little more complicated. Imagine the speed at which cars travel along some of the sections of road depends on how many cars are travelling along it - so the journey time from A to B is now (1 + x/100) hours, where 100 is the maximum number of cars that can travel along it, and x is the number of cars that choose to travel that way.

[the diagram from above but with the formulae, and with sliders so you can play with the ratio of traffic and see the resulting journey times; B-D and A-C are still 2 hours; for each of the routes ‘number of cars choosing this route’, which have to add up to 100, and ‘travel time for these cars’]]

So, if one car travels along the section from A to B, it would take 1 + 1/100 hours (a little over an hour), but if 100 cars try to drive that way at once, it will take all of them a full 1 + 100/100 =[[2]] hours.

Now, if half of 100 cars take each route, their travel time is (1 + [[50]]/100) hours = [[1.5 hours]] for the first section, and then 2 hours for the second half, and vice versa for the bottom route. This situation is a Nash equilibrium for all the drivers, as if any of them switched from their current route to the other one, they would find their journey takes longer.

---

Now let’s change the road layout - adding in an extra bypass road between B & C, which takes only 15 minutes to drive along. This offers drivers another option - driving from A to B, then down to C, then from C to D.

If only one car is driving this route, the time taken is a little over an hour for each of the traffic-dependent sections, plus 15 minutes for the central cut-through. This is faster than the 3 ½ hours it took to drive across the top or bottom in the equilibrium scenario, so drivers will choose it favourably. But once more drivers choose this route, it becomes slower. We can model this by trying different numbers of drivers choosing each route, and try to find the optimal arrangement.

[interactive version of the diagram which lets you change all these variables, now across three routes]

If 25 of the drivers take the original top/bottom routes ABD and ACD, and 50 take the central cut-through route ABCD, everyone’s travel time is the same - [[3 hours 45 minutes]] - and if anyone were to change their route, the travel time would increase. So this state is a Nash equilibrium, and once reached, nobody will have an incentive to change it.

But this is longer than it took to drive across ABD and ACD before the extra road was added! Adding an extra road to the system, which serves as a cut-through, has made the system less efficient. This is an example of Braess’ Paradox - formulated in 1968 by German mathematician Dietrich Braess, who noticed that adding an extra road to a congested traffic network, under certain conditions, can actually increase overall journey time.

This paradox can sometimes be seen to apply in real-world situations - in Stuttgart, Germany in 1969, the road network was extensively improved to try and reduce traffic, but the congestion did not get any better until a section of newly built road was closed again. In 1990 the temporary closing of 42nd Street in New York City for Earth Day reduced the amount of traffic in the area, even though fewer roads were open to drive on.

[Image caption: Broadway in New York, closed to traffic for Earth Day in 2018 (photograph courtesy of NYC DOT)]

There have also been instances of mathematicians recommending specific road closures, having analysed traffic data and travel times, making use of this paradox to successfully reduce traffic.
Like in the prisoner’s paradox, no driver would set out to deliberately make their own journey longer, but since they need to make their decision without knowing what the other drivers will do, the best decision in each particular case is to take the shorter route - making everyone’s journeys longer. While the system will end up in a Nash equilibrium - where nobody can improve their individual journey time by changing their strategy - a better equilibrium exists, but it will never be reached if everyone is behaving logically. They might need a little help from a clever mathematician with a ‘Road Closed’ sign!

---

You can also play the Prisoner’s Paradox as a sort of game - called the Iterated Prisoner’s Paradox, you can play through this situation over and over again, and instead of accruing years of prison time, you score points based on the payoffs in the matrix. In this circumstance, you can learn about your opponent and what their strategy might be, based on their decisions in previous rounds.

[System to play the game against a choice of opponents, and if you switch opponents your scores reset; the AI opponents could have different names and each play a different strategy, which the player has to identify. A good example is at https://ncase.me/trust/]

Having played against each of the opponents for a little while, we can determine which of them is using which strategy.

Opponent 1 [[Always remains silent | Always agrees to testify | Chooses randomly with probability ½ | Chooses whatever you did on the last round (known as a ‘tit-for-tat’ strategy)]]
Opponent 2 [[Always remains silent | Always agrees to testify | Chooses randomly with probability ½ | Chooses whatever you did on the last round (known as a ‘tit-for-tat’ strategy)]]
Opponent 3 [[Always remains silent | Always agrees to testify | Chooses randomly with probability ½ | Chooses whatever you did on the last round (known as a ‘tit-for-tat’ strategy)]]
Opponent 4 [[Always remains silent | Always agrees to testify | Chooses randomly with probability ½ | Chooses whatever you did on the last round (known as a ‘tit-for-tat’ strategy)]]

A famous experiment in the 1980s involved a competition of 62 computer programs, each playing all the others for 200 rounds of Iterated Prisoner’s Paradox.

The most successful strategies had certain characteristics:
- they were all nice: they did not choose to betray their opponent before the opponent did;
- they would always retaliate when an opponent betrayed;
- they were forgiving, returning to cooperation when the opponent stopped betraying
- they were non-envious, seeking to maximise their own benefit rather than to reduce that of their opponents.

---

A similar game can be played by two players each choosing a number between 1 and 3 and putting up that many fingers. The sum of the two chosen numbers (the total number of fingers shown) is counted, and if it’s odd, Player 1 wins £1 and if it’s even, Player 2 wins £1.

[Applet to play the game against a random opponent, with a choice of whether you’re player 1 or 2]

Let’s construct a payoff matrix for this game:

Player 1 vv Player 2 >>
1
2
3
1
([0],[1])
([1],[0])
([0],[1])
2
([1],[0])
([0],[1])
([1],[0])
3
([0],[1])
([1],[0])
([0],[1])

What can we say about this game?
It’s a [[symmetric | non-symmetric]] game
[[Player 1 | Player 2]] has more chance of winning.
If you are Player 1 in this game, and the other player is picking at random, you have more chance of winning if you put up an [[odd | even]] number of fingers, in which case you win [[2]] out of [[3]] times.
If you are Player 2 in this game, and the other player is picking at random, you have more chance of winning if you put up an [[odd | even]] number of fingers, in which case you win [[4]] out of [[6]] times.

However, if the players can work out each other’s preferred strategies, this will change what their best option is - which will change the other player’s best strategy! Optimal play in this game will depend on what kind of player you’re playing against. Do they retaliate when you beat them? Do they favour one choice of odd/even over the other? You might be better equipped to work out a strategy once you’ve played a few rounds - maths can’t help you here as much as knowing your opponent does!



----------------------------------------------------------------------------------------------------


## Cards, Coins and Dice

> section: cards-coins-dice
> sectionStatus: dev

{.todo} Coming Soon!


----------------------------------------------------------------------------------------------------


## The Winning Move

> section: nim
> url: /world/Game_Theory

In all the games we’ve seen so far, there was an element of _uncertainty_: you didn't know what the
other player might do (like in the [prisoners’ dilemma](gloss!:prisoners-dilemma)), or you didn't
know the result when rolling dice, flipping coins or shuffling cards.

::: column.grow

In this chapter we will look at a different kind of game, where there is no _chance_ or _luck_, and
where all players know the current state of the game. Games like this are called [__combinatorial
games__](gloss!:combinatorial-games).

One of the most famous combinatorial games is __chess__. A player doesn’t know what the other one
might do in the future, but all players know the current position of every piece on the chess board.
[Continue](btn:next)

::: column(width=300)

CHESS IMAGE

:::

---

Instead, let's look at a much simpler game. There are three boxes of chocolates and two players.
At every turn, a player has to eat one or more chocolates, but only from _one box_ at a time. For
example, you could eat three chocolates from box A, but not one from box A and one from box B.
Both players alternate, until all boxes are empty. Whoever gets the last chocolate wins!

Here you can try playing this game against the computer. Simply tap all the chocolates you want to
"eat", and then tap the button to end your turn:

    p.todo INTERACTIVE GAME
    p.text-center: button.btn End your turn

---

If you play the game a few times, you might notice that you [[always lose|lose if you take more than
one chocolate at once|lose if you take any chocolates from box 3]].

{.fixme} After some time you may notice that you always lose. In fact, it is clear from the beginning that the computer always wins unless it makes a mistake. The following sections will explore different methods to analyse combinatorial games, to find <em>winning strategies</em> and to determine whether it is better to go first or to go second.

---

### Tree Diagrams

One method to think about combinatorial games is to make a list of all possible outcomes. This is best done in a <em>tree diagram</em>, where every fork shows all possible choices a player could make. Here is the tree diagram for a slightly simpler version of the game above, with only three chocolates per box.

::: x-slideshow

{div(slot="legend")} xxx

{div(slot="legend")} Whoever empties the first box loses, because the opponent can empty the other box, thereby taking the last chocolate. Therefore <strong class="green">Player 1</strong> only has two sensible choices: taking one or taking two chocolates from one box.

{div(slot="legend")} Now it&#8217;s <span class='lblue'><strong>Player 2</strong></span>&#8217;s turn. <span class='lblue'><strong>Player 2</strong></span> also doesn&#8217;t want to empty any box. This means there are two possibilities in one case, and three in the other.

{div(slot="legend")} It&#8217;s <span class='green'><strong>Player 1</strong></span>&#8217;s turn. With fewer chocolates left there are much fewer possibilities that don&#8217;t involve emptying the first box, which would lead to certain loss.

{div(slot="legend")} We continue: if there is one chocolate in both boxes, one player has to empty the first box. The opponent can then take the last chocolate from the second box and wins.

{div(slot="legend")} Let us highlight the final positions in which <span class="green"><strong>Player 1</strong></span> and <span class="lblue"><strong>Player 2</strong></span> win.

{div(slot="legend")} So far the game seems quite fair: there are three winning positions for each player. Now let us think about the positions second from last.

{div(slot="legend")} Once we have arrived at any of these positions we already know who is going to win. If you can only go to a winning position for <strong class="green">Player 1</strong>, this also has to be a winning position for <strong class="green">Player 1</strong>. And the same is true for <span class="lblue"><strong>Player 2</strong></span>. We can colour the positions second from last according to which winning position they lead to.

{div(slot="legend")} And we can do the same again: whenever we can only go to winning positions of one kind, we colour the previous position in the same colour.

{div(slot="legend")} Unfortunately we will get stuck at some point&#8230;

{div(slot="legend")} When at these two positions there is a choice: we could either go to a winning position for <strong><span class="green">Player 1</span></strong> or to a winning position for <strong><span class="lblue">Player 2</span></strong>. Here we have to make an assumption that both players are intelligent and will play in their best interest. If it is <strong><span class="green">Player 1</span></strong>&#8217;s turn he/she will of course go to his/her own winning position and the same for <strong><span class="lblue">Player 2</span></strong>.

{div(slot="legend")} We have coloured the first case <span class="lblue"><strong>blue</strong></span> because <span class="lblue"><strong>Player 2</strong></span> has a choice to go to his/her own winning position. The second case is coloured <span class="green"><strong>green</strong></span> because <span class="green"><strong>Player 1</strong></span> has a choice to go to his/her own winning position. These are the positions where players have to be careful not to make a mistake.

{div(slot="legend")} The same is happens here: <span class='lblue'><strong>Player 2</strong></span> has the option to go to <span class='lblue'><strong>blue</strong></span> and <span class='green'><strong>green</strong></span> winning positions, but &#8211; if he plays intelligently &#8211; he/she will of course choose <span class='lblue'><strong>blue</strong></span>.

{div(slot="legend")} It seems that whatever <strong class='green'>Player 1</strong> does on the first turn, he/she will always end up on a winning position for <span class='lblue'><strong>Player 2</strong></span>.

:::

---

It looks like <strong>Player 2</strong></span> is destined to win from the beginning &#8211; unless he makes a mistake.

This method is useful for simple games, but impractical if we have boxes with many more chocolates. If there are five chocolates per box, we would have to consider more than 10,000 possibilities!

---

### P and N-Positions

In the tree diagram above we had many copies of the same state in different branches of the tree. Instead let us draw a diagram of all the different states, and connect two states with an arrow if a player could move from one to the other. (Remember that you can&#8217;t put chocolates back or take chocolates from more than one box.)

We will again highlight various states with different colours, but the colours will have a different meaning than above.

::: x-slideshow

{div(slot="legend")} Here you can see all possible states of the game we were playing.

{div(slot="legend")} These arrows show the possible moving directions. On your turn you can move either down or to the right, however far you want.</p>

{div(slot="legend")} We know that once we have reached the bottom right corner, the <strong class="lblue">p</strong>revious player will have taken the last chocolate and won. We call it a <strong class='lblue'><em>P</em>-position</strong> and colour it <strong class='lblue'>blue</strong>.</p>

{div(slot="legend")} If we are in any state that <em>leads to</em> the <strong class='lblue'><em>P</em>-position</strong>, the <strong class='red'>n</strong>ext player will win. We call these <strong class='red'><em>N</em>-positions</strong> and colour them <span class='red'>red</span>.</p>

{div(slot="legend")} From here you can only move to <strong class='red'><em>N</em>-position</strong>. Once you have done that, you opponent is next and can win. Therefore this has to be a <strong class='lblue'><em>P</em>-position</strong>.</p>

{div(slot="legend")} Any positions that leads to the new <strong class='lblue'><em>P</em>-position</strong> have to be an <strong class='red'><em>N</em>-position</strong> &#8211; The <em>next</em> player will win. Can you see a pattern?</p>

{div(slot="legend")} Here is another <strong class='lblue'><em>P</em>-position</strong> from where you can only move to <strong class='red'><em>N</em>-positions</strong>.</p>

{div(slot="legend")} These two are <strong class='red'><em>N</em>-positions</strong> because the <em>next</em> player can move to a <strong class='lblue'><em>P</em>-position</strong>.</p>

{div(slot="legend")} Finally the starting position is a <strong class='lblue'><em>P</em>-position</strong>. The &#8220;previous&#8221; player wins, and whoever makes the first move is destined to lose.

:::

---

The pattern is quite obvious: all positions along the diagonal, where there are the same number of chocolates in each box, are <span class="lblue"><em><strong>P</strong></em>-positions</span>. All the other positions are <span class="red"><em><strong> N</strong></em>-position</span>. And this extends to bigger box sizes, including nine chocolates per box like in the game at the beginning of this article. You always made the first move, so you had no chance of winning unless the computer had made a mistake.

A <span class="lblue"><em><strong>P</strong></em>-position</span> is a position in which the <strong class="lblue">p</strong>revious player will win (who moved to that position) and a <span class="red"><em><strong>N</strong></em>-position</span> is a position where the <span class="red"><strong>n</strong></span>ext player will win (who moves away from that position). When playing, you want to make sure that you always end your turn on a <span class="lblue"><em><strong>P</strong></em>-position</span>.

We also observed that from a <span class="lblue"><em><strong>P</strong></em>-position</span> you can only move to <span class="red"><em><strong>N</strong></em>-positions</span>, and from a <span class="red"><em><strong>N</strong></em>-position</span> you can  move to at least one <span class="lblue"><em><strong>P</strong></em>-position</span>.

Starting on a <span class="lblue"><em><strong>P</strong></em>-position</span>, the next player will lose. Therefore the next player must only be able to move to <span class="red"><em><strong>N</strong></em>-positions</span>. Starting on an <span class="red"><em><strong>N</strong></em>-position</span>, the next player will win. Therefore there must be at least one <span class="lblue"><em><strong>P</strong></em>-position</span> where the next player can move to. (The game will change if you make a mistake.)

To analyse a game, we have to start from the end when we know who would have won. Then we can work backwards using the two rules above to classify all positions in the game.

In any game that can be analysed using this method, the outcome is determined from the beginning. If you are unlucky and you are the player destined to lose, there is nothing you can do except hope that your opponent makes a mistake…

---

### The Game of Nim

The game we have been thinking about is a variant of <strong>Nim</strong>. The winning strategy for only two boxes of chocolates is easy to find, but things get more interesting when we have three or more boxes. Instead of boxes of chocolates we will simply use piles of counters: you are allowed to take as many counters as you want, but only from one pile at a time. We can denote the various states of the game using numbers: for example, (2,5,4) means there are three piles with 2, 5 and 4 counters respectively.

INTERACTIVE

Notice that it doesn&#8217;t matter which order the piles are in, or whether there are additional piles with zero counters. For example, (2,5,4) = (5,0,4,2). We have already shown that (1,1), (2,2), (3,3), &#8230; are all <em><strong>P</strong></em>-positions, and there is a simple method for determining whether positions with three or more piles are <em><strong>P</strong></em> or <em><strong>N</strong></em>. <span class="lgrey">This method may seem quite unexpected and unrelated to game theory. It arises when you analyse
 <em><strong>P</strong></em> and <em><strong>N</strong></em>-positions mathematically.</span>

A Nim state (_a_, _b_, _c_, …) is a <strong><em>P</em></strong>-position if the _binary digital sum_ or __Nim sum__ of _a_, _b_, _c_, … is 0. Otherwise it is a __{.i}N__-position. The Nim sum is often written as _a_ ⊕ _b_ ⊕ _c_ ⊕ … and can be calculated as shown in the following example.

To find the Nim sum 3 ⊕ 6 ⊕ 7 we proceed as follows:

---

::: x-slideshow

{div(slot="legend")} Above you can see the three numbers __{.red}3__, <strong class="red">6</strong> and <strong class="red">7</strong> in different rows and  powers of 2 (<strong class="blue">1</strong>, <strong class="blue">2</strong>, <strong class="blue">4</strong>, 8, &#8230;) in different columns. We first need to write 3, 6 and 7 in binary, which means writing them as a sum of powers of 2.

{div(slot="legend")} Note that <strong class="green">3 = 1 + 2</strong>. We need to add the powers 1 and 2, but we don&#8217;t need 4. Therefore <strong class="green">3 = 011</strong> in binary.

{div(slot="legend")} Note that <strong class="cyan">6 = 2 + 4</strong>. We need the powers 2 and 4, but we don&#8217;t need 1. Therefore <strong class="cyan">6 = 110</strong> in binary.

{div(slot="legend")} Note that <strong class="lblue">7 = 1 + 2 + 4</strong>. Here we need all three powers of two.</p>

{div(slot="legend")} Now we have to add the columns we just created, but without carrying digits.</p>

{div(slot="legend")} In this column, we have an even number of 1s so the answer is <strong class="orange">0</strong>.</p>

{div(slot="legend")} In this column we have an odd number of 1s so the answer is <strong class="purple">1</strong>.</p>

{div(slot="legend")} In this column we have an even number of 1s so the answer is <strong class="pink">0</strong>.</p>

{div(slot="legend")} The binary digital sum  of 3, 6 and 7 is <strong class="red">010</strong>, and when we convert this from binary we get <strong class="red">2</strong>. Since the Nim sum is not 0, the Nim state (3,6,7) is a <em><strong>N</strong></em>-position. Removing two counters from any pile will make the Nim sum 0, so this would represent moving to a <em><strong>P</strong></em>-position.</p>

:::

Nim has several important properties:

* Exactly two opponents move alternately.
* The moves and all options are clearly specified by rules, and there are no chance moves.
* There are only finitely many different positions and the game will always come to an end when one player is unable to move. This means that there are no draws and no cycles, which could repeat forever.
* The players have perfect information. Card games often don&#8217;t have perfect information because one player doesn&#8217;t know the opponents&#8217; cards.</li>
* From any one position of the game both players have the same choice of moves. This is not true for chess, because from any particular position, one player can only move white figures and the opponent can only move black ones.

Games with all these properties are called __Impartial Games__. Mathematicians discovered that <em>any</em> impartial game is equivalent to a game of Nim with certain box sizes. This means that the <em><strong>P</strong></em> and <em><strong>N</strong></em>-positions match up, and that there are always the same number of possible moves. A winning strategy for any impartial game can be found by converting it into Nim and then using the Nim sum.</p>

Impartial games are interesting to analyse from a mathematical point of view, but once you have found a winning strategy they are not particularly exciting to play &#8211; you know right from the beginning who is going to win.

Unfortunately, there are so many different moves and positions in chess, that it is almost
impossible to analyse it using the methods we will develop in this chapter. After just 10 moves,
there are over _69 trillion_ possible states, and the total number of possible sequences of moves
might be as big as `10^120`!

There are many other combinatorial games. Some, like chess, are so complex that we can&#8217;t use methods like the ones above. Chess computers don&#8217;t try millions of different possibilities &#8211; they play very much like a human being would: analysing the current position and following certain strategies.


--------------------------------------------------------------------------------


## Random Walks

> section: random-walks
> sectionStatus: dev

{.todo} Coming Soon!
