var TopVotedCandidate = function(persons, times) {
    this.times = times;
    this.leaders = [];

    const votes = new Map();
    let leader = -1;
    let maxVotes = 0;

    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        const count = (votes.get(person) || 0) + 1;

        votes.set(person, count);

        if (count >= maxVotes) {
            maxVotes = count;
            leader = person;
        }

        this.leaders.push(leader);
    }
};

TopVotedCandidate.prototype.q = function(t) {
    let left = 0;
    let right = this.times.length - 1;
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (this.times[mid] <= t) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return this.leaders[answer];
};
