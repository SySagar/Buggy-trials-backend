import prisma from "@config/prismaConfig";
export const createUser = async (data: {
  userEmail: string;
  password: string;
  profile: {
  name: string;
  username: string;
  githubId: string | null;
  };
}): Promise<boolean> => {
  try {
    await prisma.user.create({
      data: {
        email: data.userEmail,
        password: data.password,
        profile: {
          create: {
            name: data.profile.name,
            username: data.profile.username,
            github_username: data.profile.githubId,
          },
        },
      },
    });
    return true;
  } catch (err: unknown) {
    console.log(err);
  }
};

export const userExistsByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return true;
    }
    return false;
  } catch (err: unknown) {
    console.log(err);
  }
};

export const userExistsByUsername = async (username: string) => {
  try {
    const count = await prisma.profile.count({
      where: {
        username: username,
      },
    });
    if (count > 0) return true;
    return false;
  } catch (err: unknown) {
    console.log(err);
  }
};
