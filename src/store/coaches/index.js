import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Allmight",
          lastName: "dude",
          img: "../../assets/images/1.jpg",
          areas: ["frontend", "backend", "career"],
          description:
            "i'm a web developer , im working with 2 company from finland , U.S and England. i'm senior in front0end and know back-end.",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          img: "@/assets/images/2.jpg",
          areas: ["frontend"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 20,
        },
        {
          id: "c3",
          firstName: "Julie",
          lastName: "Jones",
          img: "@/assets/images/3.jpg",
          areas: ["career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 10,
        },
        {
          id: "c4",
          firstName: "Julie",
          lastName: "Jones",
          img: "@/assets/images/4.jpg",
          areas: ["frontend", "backend"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
