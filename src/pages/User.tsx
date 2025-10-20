import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const User = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Profile</h1>
            <p className="text-xl text-muted-foreground mb-16">
              Manage your Kakbus account
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-6 mb-8">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="text-3xl bg-gradient-button text-white">
                    KB
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Kakbus User</h2>
                  <p className="text-muted-foreground">user@kakbus.com</p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Current Plan</h3>
                    <p className="text-muted-foreground">Free Preview</p>
                  </div>
                  <Badge className="bg-gradient-accent text-white">Preview</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Account Status</h3>
                    <p className="text-muted-foreground">Early Access</p>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Button 
                disabled 
                className="opacity-50 cursor-not-allowed"
                title="Feature coming soon"
              >
                Manage Account
              </Button>
              <Button 
                disabled 
                variant="outline"
                className="opacity-50 cursor-not-allowed"
                title="Feature coming soon"
              >
                Upgrade Plan
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-8">
              Full account management features coming soon
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
