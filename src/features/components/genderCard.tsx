import { useState } from "react";
import { useUpdateGenderAndPreference } from "../hooks/use-UpdateGenderAndPreference";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "../hooks/use-Auth";
import { useUpdateGenderFromDashboard } from "../hooks/use-updateGenderFromDashboard";
import Icon from "@mdi/react";
import { mdiGenderMale, mdiGenderFemale, mdiGenderNonBinary, mdiGenderTransgender } from "@mdi/js";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function GenderCard() {
  const [gender, setGender] = useState<string>("");
  const [genderPreference, setGenderPreference] = useState<string>("");
  const { mutate } = useUpdateGenderAndPreference();
  const { mutate: updateGender } = useUpdateGenderFromDashboard();
  const { data: auth } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gender || !genderPreference) {
      return;
    }
    if (auth?.gender == null && auth?.genderPreference == null) {
      mutate({ gender, genderPreference });
    } else {
      updateGender({ gender, genderPreference });
    }
  };

  // Helper function to transform gender enum to a readable format
  const getReadableGender = (gender: string | null) => {
    if (gender === "NON_BINARY") {
      return "Non Binary";
    }
    return gender ? gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase() : "";
  };

  // Helper function to determine the correct icon
  const getGenderIcon = (gender: string | null) => {
    switch (gender) {
      case "MALE":
        return <Icon path={mdiGenderMale} size={1} />;
      case "FEMALE":
        return <Icon path={mdiGenderFemale} size={1} />;
      case "NON_BINARY":
        return <Icon path={mdiGenderNonBinary} size={1} />;
      case "OTHER":
        return <Icon path={mdiGenderTransgender} size={1} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col items-center overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        {auth?.gender != null && auth?.genderPreference != null && (
          <Link to="/chat">
            <Button>Back</Button>
          </Link>
        )}
      </div>

      {/* Current Gender and Preference */}
      {auth?.gender != null && auth?.genderPreference != null && (
        <div className="w-full text-center mt-8">
          <p className="text-lg font-medium flex items-center justify-center">
            Current Gender: {getReadableGender(auth.gender)} {getGenderIcon(auth.gender)}
          </p>
          <p className="text-lg font-medium flex items-center justify-center">
            Gender Preference: {getReadableGender(auth.genderPreference)} {getGenderIcon(auth.genderPreference)}
          </p>
        </div>
      )}

      {/* Card Section */}
      <div className="flex-grow flex justify-center items-center">
        <Card className="max-w-sm mx-auto shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Update Your Gender and Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-3">Gender</label>
                <Select value={gender} onValueChange={setGender} required={true}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                    <SelectItem value="NON_BINARY">Non-binary</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-3">Gender Preference</label>
                <Select value={genderPreference} onValueChange={setGenderPreference} required={true}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender Preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                    <SelectItem value="NON_BINARY">Non-binary</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none mt-8"
              >
                Update Preferences
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
